import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex max-md:flex-col flex-wrap lg:justify-between gap-x-32 gap-y-12 text-black-400 sm:px-16 px-6 py-10 mt-5'>
    <div className='flex flex-col justify-start items-start gap-6 pr-10'>
      <img src='/logo.svg' />
      <p className='text-base font-bold'>
        Carent 2020. <br />
        All Rights Reserved &copy;
      </p>
    </div>

    {footerLinks.map((item) => (
      <div
        key={item.title}
        className='flex flex-col justify-start items-start gap-6 text-20 leading-24'
      >
        <h3 className='font-bold'>{item.title}</h3>
        {item.isSocialMedia ? (
          <div className='flex gap-6'>
            {item.links.map((link) => (
              <a href={link.url} target='_blank' rel='noreferrer'>
                <img src={link.icon} alt={link.title} />
              </a>
            ))}
          </div>
        ) : (
          item.links.map((link) => (
            <a key={link.title} href={link.url}>
              {link.title}
            </a>
          ))
        )}
      </div>
    ))}
  </footer>
);

export default Footer;
