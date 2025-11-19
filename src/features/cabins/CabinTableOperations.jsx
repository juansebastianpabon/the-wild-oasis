import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter.jsx';
import SortBy from '../../ui/SortBy.jsx';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'with-discount', label: 'With discount' },
          { value: 'no-discount', label: 'No discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort By name (A-Z)' },
          { value: 'name-dsc', label: 'Sort By name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort By price (Low to High)' },
          { value: 'regularPrice-dsc', label: 'Sort By price (High to Low)' },
          {
            value: 'maxCapacity-asc',
            label: 'Sort By max capacity (Low to High)',
          },
          {
            value: 'maxCapacity-dsc',
            label: 'Sort By max capacity (High to Low)',
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
