
import{Link} from 'react-router-dom'
import axios from "axios";
import { useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { allTypes } from "../../Redux/actions";
import { useEffect } from "react";
import style from './Form.module.css';

const Form = ()=>{
   
  const Types = useSelector((state) => state.Types);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "", 
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    types: [],
  });

  const Validate = (input) => {
    let errors = {};
    const regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
  
    if (!input.name) {
      errors.name = "A name is required";
    } else if (input.name.length > 10) {
      errors.name = "Must be less than 10 characters";
    }
  
    if (!regexImage.test(input.image)) {
      errors.image = "Please enter a valid URL";
    } else if (!input.image) {
      errors.image = "Image cannot be empty";
    }
  
    const isPositiveNumber = (value) => /^[0-9]+$/.test(value);
  
    if (!isPositiveNumber(input.hp)) {
      errors.hp = "HP must be a positive number";
    }
  
    if (!isPositiveNumber(input.attack)) {
      errors.attack = "Attack must be a positive number";
    }
  
    if (!isPositiveNumber(input.defense)) {
      errors.defense = "Defense must be a positive number";
    }
  
    if (input.speed && !isPositiveNumber(input.speed)) {
      errors.speed = "Speed must be a positive number";
    }
  
    if (input.height && !isPositiveNumber(input.height)) {
      errors.height = "Height must be a positive number";
    }
  
    if (input.weight && !isPositiveNumber(input.weight)) {
      errors.weight = "Weight must be a positive number";
    }
  
    if (input.types.length < 2) {
      errors.types = "You must choose at least 2 types";
    } else if (input.types.length > 2) {
      errors.types = "You cannot choose more than 2 types";
    }
  
    return errors;
  };
  

  useEffect(() => {
    dispatch(allTypes());
  }, [dispatch]);

  const [errors, setErrors] = useState({});
  

// Efecto para validar el formulario cuando cambian sus valores
  useEffect(() => {
    const validationErrors = Validate(form);
    setErrors(validationErrors);
  }, [form]);

  // Deshabilitar el botón de envío si hay errores de validación
  const disabledButton = Object.keys(errors).length > 0;

  // Manejar cambios en los campos de entrada del formulario
  const handleInputChange = (event) => {
    const updatedForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(updatedForm);
  };

  // Manejar la selección de tipos de Pokémon
  const handleSelect = (e) => {
    const selectedType = e.target.value;
    if (!selectedTypes.includes(selectedType)) {
      setSelectedTypes([...selectedTypes, selectedType]);
    }
  };

  const removeType = (typeToRemove) => {
    const updatedTypes = selectedTypes.filter((type) => type !== typeToRemove);
    setSelectedTypes(updatedTypes);
  };

  // Enviar el formulario al servidor
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Actualiza el campo types en el objeto de estado form con selectedTypes
    const updatedForm = {
      ...form,
      types: selectedTypes,
    };
  
    try {
      const response = await axios.post("http://localhost:3001/pokemon/create", updatedForm);
      
      if (response && response.status === 200) {
        window.alert('Successfully created Pokémon.');
        // Invalidar el caché después de crear un nuevo Pokémon
       
        setForm({
          name: '',
          image: '',
          hp: '',
          attack: '',
          defense: '',
          height: '',
          weight: '',
          speed: '',
          types: []
        });
      } else {
        window.alert('An error occurred while creating the Pokémon.');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        window.alert('You already created a Pokémon with that name.');
      } else {
        window.alert('An error occurred while creating the Pokémon.');
      }
    }
  };
  

    return (
    <div className={ style.Forms}>
      <h2 className= {style.Title}>FORM</h2>
      <form onSubmit={handleSubmit} className= {style.FormContainer}>
        <label className= {style.FormLabel}>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleInputChange} />
          {errors.name? <p  className= {style.Error}>{errors.name}</p>:<p></p>}
        </label>

        <label className= {style.FormLabel}>
            Image (image link):
            <input type="text" name="image" value={form.image} onChange={handleInputChange}/>
            {errors.image? <p  className= {style.Error}>{errors.image}</p>:<p></p>}
        </label>
           
        <label className= {style.FormLabel}>
            Hp:
            <input type="text" name="hp" value={form.hp} onChange={handleInputChange}/>
            {errors.hp? <p  className= {style.Error}>{errors.hp}</p>:<p></p>}
        </label>
        
        <label className= {style.FormLabel}>
           Attack:
            <input type="text" name="attack" value={form.attack} onChange={handleInputChange}/>
            {errors.attack? <p  className= {style.Error}> {errors.attack}</p>:<p></p>}
        </label> 

        <label className= {style.FormLabel}>
            Defense:
            <input type="text" name="defense" value={form.defense} onChange={handleInputChange}/>
            {errors.defense? <p  className= {style.Error}>{errors.defense}</p>:<p></p>}
        </label>

        <label className= {style.FormLabel}>
         Height:
            <input type="text" name="height" value={form.height} onChange={handleInputChange}/>
            {errors.height? <p  className= {style.Error}>{errors.height}</p>:<p></p>}
        </label>
        
        <label className= {style.FormLabel}>
            Weight:
            <input type="text" name="weight" value={form.weight} onChange={handleInputChange}/>
            {errors.weight? <p  className= {style.Error} >{errors.weight}</p>:<p></p>}
        </label>
        
        <label className= {style.FormLabel}>
            Speed:
            <input type="text" name="speed" value={form.speed} onChange={handleInputChange}/>
            {errors.speed? <p className={ style.Error} >{errors.speed}</p>:<p></p>}
        </label>

        <label className={style.FormLabel}>Types:</label>
      <select className={style.FormSelect} onChange={(e) => handleSelect(e)}>
        {Types.map((t, index) => (
          <option key={index} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      {selectedTypes.length > 0 && (
        <div className={style.SelectedTypes}>
          {selectedTypes.map((type, index) => (
            <div key={index} className={style.SelectedType}>
              {type}
              <button className={style.RemoveButton} onClick={() => removeType(type)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        )}
        <div className={style.Buttons}>
          <button
            type="submit"
            className={style.SubmitButton}
            disabled={!disabledButton}
          >
            Create Pokémon
          </button>
          <Link to={'/Home'} className={style.LinkButton}>
            <button className={style.DoneButton}>Done</button>
            <button className={style.BackButton}>BACK</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form