import React, { useEffect, useState } from "react";
import bannerImage from "../../../assets/client-details.svg";
import { useParams } from "react-router";
import { getClientById } from "../../../services/clients.services.js";
import PropuestaCard from "../Profile/PropuestaCard/PropuestaCard.jsx";
import BillCard from "./BillCard/BillCard.jsx";


const ClientDetails = () => {
  const [clientName, setClientName] = useState("Nombre del cliente");
  const [clientAddress, setClientAddress] = useState("Sin dirección de suministro");
  const [clientPhone, setClientPhone] = useState("Teléfono no proporcionado");
  const [clientEmail, setClientEmail] = useState("Email no proporcionado");
  const [clientCups, setClientCups] = useState("CUPS no proporcionado");

  const { id: clientId } = useParams(); // Destructure the 'id' from useParams

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientData = await getClientById(clientId);
        console.log(clientData);
        // Update state with the fetched data
        setClientName(clientData.titular); // Assuming the response has a 'name' field
        setClientPhone(clientData.phone_number || "Teléfono no proporcionado"); // Assuming the response has a 'phone' field
        setClientEmail(clientData.email || "Email no proporcionado"); // Assuming the response has an 'email' field
        setClientCups(clientData.CUPs[0].CUPS); // Assuming the response has a 'cups' field
        setClientAddress(clientData.CUPs[0].direccion_suministro); // Assuming the response has an 'address' field
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchData();
  }, [clientId]);

  return (
    <section id="client-details">
      <section id="client-details-banner">
        <img src={bannerImage} alt="Banner Image" />
        <section id="client-info">
          <h1 id="client-info-name">{clientName}</h1>
          <article id="client-info-adress">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.25 10.1433C3.25 5.24427 7.15501 1.25 12 1.25C16.845 1.25 20.75 5.24427 20.75 10.1433C20.75 12.5084 20.076 15.0479 18.8844 17.2419C17.6944 19.4331 15.9556 21.3372 13.7805 22.3539C12.6506 22.882 11.3494 22.882 10.2195 22.3539C8.04437 21.3372 6.30562 19.4331 5.11556 17.2419C3.92403 15.0479 3.25 12.5084 3.25 10.1433ZM12 2.75C8.00843 2.75 4.75 6.04748 4.75 10.1433C4.75 12.2404 5.35263 14.5354 6.4337 16.526C7.51624 18.5192 9.04602 20.1496 10.8546 20.995C11.5821 21.335 12.4179 21.335 13.1454 20.995C14.954 20.1496 16.4838 18.5192 17.5663 16.526C18.6474 14.5354 19.25 12.2404 19.25 10.1433C19.25 6.04748 15.9916 2.75 12 2.75ZM12 7.75C10.7574 7.75 9.75 8.75736 9.75 10C9.75 11.2426 10.7574 12.25 12 12.25C13.2426 12.25 14.25 11.2426 14.25 10C14.25 8.75736 13.2426 7.75 12 7.75ZM8.25 10C8.25 7.92893 9.92893 6.25 12 6.25C14.0711 6.25 15.75 7.92893 15.75 10C15.75 12.0711 14.0711 13.75 12 13.75C9.92893 13.75 8.25 12.0711 8.25 10Z"
                fill="#1F1D1C"
              />
            </svg>
            {clientAddress}
          </article>
          <article id="client-info-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.00745 3.40735C7.68752 1.72728 10.5227 1.855 11.6925 3.95112L12.3415 5.11405C13.1054 6.48287 12.7799 8.20995 11.6616 9.34192C11.6467 9.36232 11.5677 9.47726 11.5579 9.67807C11.5454 9.93439 11.6364 10.5272 12.5548 11.4456C13.4729 12.3637 14.0656 12.455 14.3221 12.4425C14.5231 12.4327 14.6381 12.3538 14.6585 12.3388C15.7905 11.2205 17.5176 10.895 18.8864 11.6589L20.0493 12.3079C22.1454 13.4778 22.2731 16.3129 20.5931 17.993C19.6944 18.8916 18.4995 19.6901 17.0953 19.7434C15.0144 19.8222 11.5591 19.2849 8.13735 15.8631C4.71556 12.4413 4.17818 8.98605 4.25706 6.90512C4.3103 5.50092 5.10879 4.30601 6.00745 3.40735ZM10.3827 4.68211C9.78363 3.60877 8.17394 3.36218 7.06811 4.46801C6.29276 5.24335 5.7887 6.09917 5.75599 6.96195C5.6902 8.69729 6.11864 11.723 9.19801 14.8024C12.2774 17.8818 15.3031 18.3102 17.0385 18.2444C17.9013 18.2117 18.7571 17.7077 19.5324 16.9323C20.6382 15.8265 20.3916 14.2168 19.3183 13.6178L18.1554 12.9688C17.432 12.565 16.4158 12.7027 15.7025 13.416L15.7023 13.4163C15.6322 13.4863 15.1864 13.9022 14.395 13.9407C13.5847 13.9802 12.604 13.6161 11.4942 12.5063C10.384 11.3961 10.02 10.415 10.0597 9.60472C10.0985 8.8132 10.5147 8.3676 10.5843 8.29795L10.5844 8.29792C11.2977 7.5846 11.4354 6.56846 11.0317 5.84504L10.3827 4.68211Z"
                fill="#1F1D1C"
              />
            </svg>
            {clientPhone}
          </article>
          <article id="client-info-email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
                fill="#1F1D1C"
              />
            </svg>
            {clientEmail}
          </article>
          <article id="client-info-cups">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.9436 1.25H13.0564C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65019 21.75 8.10583 21.75 9.94359V14.0564C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6614 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0564 22.75H10.9436C9.10583 22.75 7.65019 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V9.94358C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25ZM6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V14C3.75 15.9068 3.75159 17.2615 3.88976 18.2892C4.02502 19.2952 4.27869 19.8749 4.7019 20.2981C5.12511 20.7213 5.70476 20.975 6.71085 21.1102C7.73851 21.2484 9.09318 21.25 11 21.25H13C14.9068 21.25 16.2615 21.2484 17.2892 21.1102C18.2952 20.975 18.8749 20.7213 19.2981 20.2981C19.7213 19.8749 19.975 19.2952 20.1102 18.2892C20.2484 17.2615 20.25 15.9068 20.25 14V10C20.25 8.09318 20.2484 6.73851 20.1102 5.71085C19.975 4.70476 19.7213 4.12511 19.2981 3.7019C18.8749 3.27869 18.2952 3.02502 17.2892 2.88976C16.2615 2.75159 14.9068 2.75 13 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H13C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z"
                fill="#1F1D1C"
              />
            </svg>
            {clientCups}
          </article>
        </section>
      </section>
      <section id="client-lists">
        <section id="client-bills">
          <h3 id="factura-actual">Factura actual del cliente</h3>
          <BillCard
                    key={1}  
                    Titular={clientName}
                    propuesta={"Candela Energía, S.A."}
                    fecha={"23 enero, 2023"}
                  />
                  
        </section>
        <section id="client-proposals">
          <h3 id="propuestas-several">Propuestas Several</h3>
          <PropuestaCard
                    key={2}  
                    Titular={clientName}
                    propuesta={"Candela Energía, S.A."}
                    fecha={"10 noviembre, 2023"}
                  />
          <PropuestaCard
                    key={3}  
                    Titular={clientName}
                    propuesta={"Candela Energía, S.A."}
                    fecha={"18 noviembre, 2023"}
                  />
          <PropuestaCard
                    key={4}  
                    Titular={clientName}
                    propuesta={"Candela Energía, S.A."}
                    fecha={"3 diciembre, 2023"}
                  />
        </section>
      </section>
    </section>
  );
};

export default ClientDetails;
