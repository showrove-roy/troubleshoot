import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className='bg-secondary py-5'>
      <div className='maxW'>
        <div className='grid md:grid-flow-col md:grid-cols-4 grid-cols-3 sm:grid-cols-2 justify-items-center sm:items-center gap-y-8 gap-x-3 '>
          {/* box-1 */}
          <div className='col-span-3 sm:col-auto'>
            <div className=''>
              <img src='/public/images/Logo.png' alt='' />
            </div>
            <div className='max-w-[300px] mb-5'>
              <p className='text-gray3 fontMont'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className='flex gap-5'>
              <div className='h-10 w-10 cursor-pointer bg-white hover:bg-primary duration-300 hover:text-white rounded-full text-[#17181C] text-xl flex justify-center items-center'>
                <FaFacebookF />
              </div>
              <div className='h-10 w-10 cursor-pointer bg-white hover:bg-primary duration-300 hover:text-white rounded-full text-[#17181C] text-xl flex justify-center items-center'>
                <FaLinkedinIn />
              </div>
              <div className='h-10 w-10 cursor-pointer bg-white hover:bg-primary duration-300 hover:text-white rounded-full text-[#17181C] text-xl flex justify-center items-center'>
                <FaTwitter />
              </div>
            </div>
          </div>
          {/* Box-2 */}
          <div className=''>
            <h5 className='text-xl font-bold capitalize mb-2'>Address</h5>
            <ul className=''>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Integrations
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Hello
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Intercom
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Customer
                </Link>
              </li>
            </ul>
          </div>

          {/* Box-3 */}
          <div className=''>
            <h5 className='text-xl font-bold capitalize mb-2'>About</h5>
            <ul className=''>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Our Blog
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Customers
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Our Team
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Careers
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          {/* box-4 */}
          <div className=''>
            <h5 className='text-xl font-bold capitalize mb-2'>Support</h5>
            <ul className=''>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Test Zoom
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Account
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Support Center
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Live Training
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  to='/'
                  className='text-gray1 hover:text-primary duration-200'>
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
