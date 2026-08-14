import PageTitle from "../components/PageTitle";
import BookingWidget from "../components/BookingWidget";

const Book = () => {
  return (
    <div className="align-element">
      <PageTitle title="Book Your Appointment" />
      <div className="max-w-3xl mx-auto">
        <BookingWidget />
      </div>
    </div>
  );
};

export default Book;
