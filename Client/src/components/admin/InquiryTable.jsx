import InquiryRow from "./InquiryRow";

const InquiryTable = ({
    inquiries,
    onDelete,
    onView
}) => {
  return (
    <div className="table-wrapper">
      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Company</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Country</th>

            <th>Industry</th>

            <th>Company Size</th>

            <th>Action</th>

          </tr>

        </thead>

       <tbody>
  {inquiries.map((item, index) => (
    <InquiryRow
      key={item._id}
      index={index}
      inquiry={item}
      onDelete={onDelete}
      onView={onView}
    />
  ))}
</tbody>

      </table>
    </div>
  );
};

export default InquiryTable;