import React from "react";
import EditPersonalData from "./pages/EditPersonalData";
import HealthMonitoring from "./pages/healthmonitoring";
import HistoryOfDiseases from "./pages/historyofdiseases";
import HistoryOfTreatments from "./pages/historyoftreatments";
import TreatmentDetails from "./pages/treatmentdetails";
import Sidebar from "./side_bar/sidebar";
import Favourites from "./pages/favourites";
import EditFavourites from "./pages/editfavourites";
import PersonalData from "./pages/personaldata";
import DoctorDetails from "./pages/doctordetails";
import AddReview from "./pages/addreview";
import AppointmentDetails from "./pages/appointmentdetails";
import EditAppointment from "./pages/editappointmentdetails";

const ProfilePage = () => {
    return(
        <div>
            <PersonalData/>
           <EditPersonalData/>
           <HealthMonitoring/>
           <HistoryOfDiseases/>
           <HistoryOfTreatments/>
           <TreatmentDetails/>
           <Sidebar/>
           <Favourites/>
           <EditFavourites/>
           <DoctorDetails/>
           <AddReview/>
           <AppointmentDetails/>
           <EditAppointment/>
        </div>
    )
}

export default ProfilePage;