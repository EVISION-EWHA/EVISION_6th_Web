import React from "react";
// import CommonTable from '../../components/table/CommonTable.jsx';
// import CommonTableColumn from '../../components/table/CommonTableColumn.js';
// import CommonTableRow from '../../components/table/CommonTableRow.js';

function PostList() {
  const list = this.state.data.data;

  return (
    <div className="List">
      <div className="list_grid list_tit">
        <div> 제목 </div>
        <div> 조회수 </div>
        <div className="acenter"> 날짜 </div>
      </div>

      {list
        ? list.map((el, key) => {
            return (
              <div className="list_grid list_data" key={key}>
                <div> {el.title} </div>
                <div> </div>
                <div className="acenter"> {el.date.slice(0, 10)} </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default PostList;
