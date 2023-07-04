import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpen(false)
    );
  }, []);

  // body screen scroll disabled
  useEffect(() => {
    if (open === false) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [open]);
  const menulist = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/'>Services</Link>
      </li>
      <li>
        <Link to='/'>Testimonials</Link>
      </li>
      <li>
        <Link to='/'>Get App</Link>
      </li>
    </>
  );
  return (
    <nav className='bg-white text-black fontMont relative'>
      <div className='maxW py-1'>
        <div className='flex justify-between items-center'>
          {/* start section */}
          <div className=''>
            <div className='md:h-14 h-10'>
              {/* logo */}
              <Link to='/'>
                <img
                  className='h-full w-full'
                  src='/public/images/Logo.png'
                  alt=''
                />
              </Link>
            </div>
          </div>

          {/* Center section  */}
          <div className='hidden md:block'>
            <ul className='menulist flex gap-3'>{menulist}</ul>
          </div>

          {/* End section  */}
          <div className='flex justify-center items-center gap-3'>
            <button className='rounded-full md:px-10 px-6 md:py-[10px] py-[6px] md:text-base text-sm border border-black font-semibold hover:text-white hover:border-primary duration-300 hover:scale-95 hover:bg-primary'>
              Log In
            </button>

            {/* responsive menu icon toggle */}
            <div className='md:hidden block'>
              {open ? (
                <HiX
                  className='text-2xl text-black'
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <HiMenu
                  className='text-2xl text-black'
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className='max-h-screen bg-white border-t-2 border-primary w-full absolute left-0 bottom-0-0 overflow-y-auto'>
          <div className=''>
            <ul className='menulist flex flex-col justify-center items-center gap-4 h-screen py-28'>
              {menulist}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
