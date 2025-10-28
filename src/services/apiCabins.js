import supabase, { supabaseUrl } from "./supabase";
//Get Cabins Service
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not get loaded");
  }

  return data;
}
//Delete Cabin Service
export async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

// (cabin,id)
//Create or Edit Cabin Service
export async function createEditCabin({ newCabin, id }) {
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin?.image.startsWith(supabaseUrl);
  //1.Create/Edit a cabin
  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  let query = supabase.from("cabins");
  /*  console.log({ ...newCabin, image: imagePath }); */
  //A) Create new cabin

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  //B)Edit existing cabin

  //upload image to storage

  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);

  //if storage error, delete the cabin entry

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
