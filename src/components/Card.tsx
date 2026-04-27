import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  text: string;
  href: string;
  children?: ReactNode;
};

const Card = ({ text, title, href, children }: CardProps) => {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={href} className="btn">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
