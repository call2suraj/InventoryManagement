import React, {Component} from 'react';
import DataTables from 'material-ui-datatables';

const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Dessert (100g serving)',
    sortable: true,
  }, {
    key: 'calories',
    label: 'Calories',
    sortable: true,
  },

];

const TABLE_DATA = [
  {
    name: 'Frozen yogurt',
    calories: '159',
    fat: '6.0',
    carbs: '24',

  }, {
    name: 'Ice cream sandwich',
    calories: '159',
    fat: '6.0',
    carbs: '24',

  },

];

export default class TableComponent extends Component {

  handleFilterValueChange (value) {
    // your filter logic
  }

  handleSortOrderChange (key, order)  {
    // your sort logic
  }

  render() {
    return (
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={TABLE_COLUMNS}
        data={TABLE_DATA}
        showCheckboxes={false}
        onCellClick={this.handleCellClick}
        onCellDoubleClick={this.handleCellDoubleClick}
        onFilterValueChange={this.handleFilterValueChange}
        onSortOrderChange={this.handleSortOrderChange}
        page={1}
        count={100}

      />
    );
  }
}