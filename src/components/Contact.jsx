import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Contact() {

useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', {type:'words'});

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
        },
        ease: "power1.inOut"
    })

    timeline.from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.02,
    })
    .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02,
    })
    .to('#f-right-leaf', {
        y: -50, duration: 1, ease: 'power1.inOut'
    })
    .to('#f-left-leaf', {
        y: -50, duration: 1, ease: 'power1.inOut'
    }, '<')


})


  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>Bol'shaya Nikitskaya Ulitsa, 12, Str.2, Moscow, Rusia, 125009</p>
          <div className="flex-center mt-12">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.1188506584876!2d37.604291076881815!3d55.75643757308559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4fa57e7c25%3A0x586f83a553bf973!2sLeveldva!5e0!3m2!1sen!2sid!4v1762352935434!5m2!1sen!2sid"
              width="800"
              height="300"
              className="rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p> +7 909 959-01-37</p>
          <p>leveldva@mail.ru</p>
        </div>

        <div>
          <h3>Open Everyday</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social.name"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
