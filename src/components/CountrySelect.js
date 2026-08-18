import React, { useState, useEffect, useRef } from 'react';
import { getCountryCallingCode } from 'react-phone-number-input/input';
import { getCountryCallingCode as getCountryCode } from 'react-phone-number-input';

export default function CountrySelect({ value, onChange, labels, options, iconComponent: Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options ? options.filter(o => o.value).filter(o => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    const countryName = (o.label || '').toLowerCase();
    let code = '';
    try {
        code = getCountryCode(o.value).toString();
    } catch (e) {}
    return countryName.includes(searchLower) || code.includes(searchLower) || `+${code}`.includes(searchLower);
  }) : [];

  return (
    <div className="custom-country-select-wrapper" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="custom-country-select-trigger"
      >
        <div className="country-select-icon">
          {Icon && value ? (
            <Icon country={value} label={labels ? labels[value] : value} className="country-icon-img" />
          ) : (
            <div className="country-icon-placeholder" />
          )}
        </div>
        <span className="country-select-code">
          {value ? `+${getCountryCode(value)}` : ''}
        </span>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`country-select-chevron ${isOpen ? 'open' : ''}`}
        >
            <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>

      {isOpen && (
        <div className="custom-country-dropdown">
          <div className="country-dropdown-search">
            <input 
              type="text" 
              placeholder="Search country or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="country-search-input"
              autoFocus
            />
          </div>

          <div className="country-dropdown-list">
            <div
              onClick={() => {
                onChange(undefined);
                setIsOpen(false);
                setSearchTerm('');
              }}
              className="country-dropdown-item"
            >
              {labels ? labels['ZZ'] : 'International'}
            </div>
            
            {filteredOptions.length > 0 ? (
              filteredOptions.map(({ value: countryValue, label }) => {
                  let cCode = '';
                  try {
                      cCode = getCountryCode(countryValue);
                  } catch(e){}
                  
                  return (
                    <div
                      key={countryValue}
                      onClick={() => {
                        onChange(countryValue);
                        setIsOpen(false);
                        setSearchTerm('');
                      }}
                      className={`country-dropdown-item ${value === countryValue ? 'selected' : ''}`}
                    >
                      <div className="country-select-icon">
                        {Icon && <Icon country={countryValue} label={label} className="country-icon-img" />}
                      </div>
                      <span className="country-dropdown-label">{label}</span>
                      <span className="country-dropdown-code">+{cCode}</span>
                    </div>
                  );
              })
            ) : (
              <div className="country-dropdown-empty">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
