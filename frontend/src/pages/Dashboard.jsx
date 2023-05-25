import ContactForm from '../components/ContactForm';
import Contacts from '../components/Contacts';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h5>
        Welcome <span className="text-primary">John Doe</span>
      </h5>
      <div className="row">
        <div className="col-md-6">
          <ContactForm />
        </div>
        <div className="col-md-6">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
