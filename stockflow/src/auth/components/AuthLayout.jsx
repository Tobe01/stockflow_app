import React from 'react';
import close from "../../assets/icons/close_white.svg";

export function AuthLayout({ title, subtitle, children, footer, setLogin, login, signup, setSignup }) {
  
  function closeLogin(){
    if(login === true){
      setLogin(false);
      setSignup(false);
    } else if(signup === true){
      setSignup(false);
      setLogin(false);
    } 
  }

  return (
    <div className="min-h-screen flex items-center justify-center modal-backdrop">
      <div className="w-full max-w-md">
        <div className="border border-border rounded-4xl shadow-sm px-10 py-5">

          <span onClick={closeLogin} className='flex w-fit ml-auto cursor-pointer'>
            <img src={close} alt='closeIcon' loading='lazy' />
          </span>
          <div className="text-center">
            <p className="text-[26px] font-bold text-secondary">{title}</p>
            {subtitle && (
              <p className="text-sm mb-2.5 leading-relaxed text-white">
                {subtitle}
              </p>
            )}
          </div>

          {children}

          {footer && <div className="text-sm text-white">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
