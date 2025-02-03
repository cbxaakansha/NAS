import React, { useState } from 'react';
import Select from 'react-select';
import logo from "../../assets/logo.png";
import '../css/Language.css';

const Language = () => {
  const [language, setLanguage] = useState('English'); 

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption.value);
  };

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Jordanian', label: 'Jordanian' },
    { value: 'French', label: 'French' },
  ];

  return (
    <section className="language-section">
      <div className="container language-container">
        <div className="Card-container-language">
          <div className="row">
            <div className="language-logo mb-3 text-center">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </div>
            <form>
              <div className="form-group">
                <Select
                  value={languageOptions.find(option => option.value === language)}
                  onChange={handleLanguageChange}
                  options={languageOptions}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      width: '100%',
                      padding: '10px',
                      fontSize: '16px',
                      borderRadius: '30px',
                      border: '1px solid #fff',
                    }),
                    dropdownIndicator: (provided) => ({
                      ...provided,
                      color: 'black',
                    }),
                    indicatorSeparator: () => ({ display: 'none' }), 
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Language;
