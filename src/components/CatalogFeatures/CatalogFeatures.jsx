import { useParams } from 'react-router-dom';
import css from './CatalogFeatures.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCamperDetails } from '../../apiServise/apiServise.js';
import Form from '../Form/Form.jsx';



function CatalogFeatures() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const selectedCamper = useSelector((state) => state.campers.details);

   useEffect(() => {
     if (id) {
       dispatch(fetchCamperDetails(id));
     }
   }, [id, dispatch]);

  

  return (
    <div className={css.container}>
      <div className={css.detailsContainer}>
        <div className={css.equipment}>
          {selectedCamper.AC && <div className={css.includes}>AC</div>}
          {selectedCamper.kitchen && (
            <div className={css.includes}>Kitchen</div>
          )}
          {selectedCamper.TV && <div className={css.includes}>TV</div>}
          {selectedCamper.bathroom && (
            <div className={css.includes}>Bathroom</div>
          )}
          {selectedCamper.radio && <div className={css.includes}>Radio</div>}
          {selectedCamper.refrigerator && (
            <div className={css.includes}>Refrigerator</div>
          )}
          {selectedCamper.microwave && (
            <div className={css.includes}>Microwave</div>
          )}
          {selectedCamper.gas && <div className={css.includes}>Gas</div>}
          {selectedCamper.water && <div className={css.includes}>Water</div>}
        </div>
        <p className={css.details}>Vehicle details</p>
        <ul className={css.list}>
          <li className={css.listItem}>
            <p className={css.text}>Form</p>
            <p className={css.text}>{selectedCamper.form}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>Length</p>
            <p className={css.text}>{selectedCamper.length}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>Height</p>
            <p className={css.text}>{selectedCamper.width}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>Tank</p>
            <p className={css.text}>{selectedCamper.tank}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>Consumption</p>
            <p className={css.text}> {selectedCamper.consumption}</p>
          </li>
        </ul>
      </div>
      <div className={css.formContainer}>
       <Form/>
      </div>
    </div>
  );
}

export default CatalogFeatures