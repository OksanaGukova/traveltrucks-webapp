import { useParams } from 'react-router-dom';
import css from './CatalogFeatures.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCamperDetails } from '../../apiServise/apiServise.js';
import Form from '../Form/Form.jsx';
import sprite from "../../../public/svg/icons.svg";


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
        <ul className={css.equipment}>
          {selectedCamper.AC && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-AC`}></use>
              </svg>
              <p>AC</p>
            </li>
          )}
          {selectedCamper.kitchen && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-coffy`}></use>
              </svg>
              <p>Kitchen</p>
            </li>
          )}
          {selectedCamper.TV && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-TV`}></use>
              </svg>
              <p>TV</p>
            </li>
          )}
          {selectedCamper.bathroom && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-shower`}></use>
              </svg>
              <p>Bathroom</p>
            </li>
          )}
          {selectedCamper.radio && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-ui-radios`}></use>
              </svg>
              <p>Radio</p>
            </li>
          )}
          {selectedCamper.refrigerator && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-refrig`}></use>
              </svg>
              <p>Refrigerator</p>
            </li>
          )}
          {selectedCamper.microwave && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-lucide_microwave`}></use>
              </svg>
              <p>Microwave</p>
            </li>
          )}
          {selectedCamper.gas && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-hugeicons_gas-stove`}></use>
              </svg>
              <p>Gas</p>
            </li>
          )}
          {selectedCamper.water && (
            <li className={css.includes}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-ion_water-outline`}></use>
              </svg>
              <p>Water</p>
            </li>
          )}
        </ul>
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
        <Form />
      </div>
    </div>
  );
}

export default CatalogFeatures