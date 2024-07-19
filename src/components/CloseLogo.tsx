import { LogoProps } from "../interfaces";

export default function CloseLogo({ fillColor, width }: LogoProps) {
  return (
    <svg
      data-testid="close-logo"
      fill={fillColor}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0675 15.1828C16.1256 15.2409 16.1717 15.3098 16.2031 15.3857C16.2345 15.4616 16.2507 15.5429 16.2507 15.625C16.2507 15.7071 16.2345 15.7885 16.2031 15.8643C16.1717 15.9402 16.1256 16.0091 16.0675 16.0672C16.0095 16.1253 15.9405 16.1713 15.8647 16.2028C15.7888 16.2342 15.7075 16.2504 15.6253 16.2504C15.5432 16.2504 15.4619 16.2342 15.386 16.2028C15.3102 16.1713 15.2412 16.1253 15.1832 16.0672L10.0003 10.8836L4.81753 16.0672C4.70026 16.1845 4.5412 16.2504 4.37535 16.2504C4.2095 16.2504 4.05044 16.1845 3.93316 16.0672C3.81588 15.9499 3.75 15.7909 3.75 15.625C3.75 15.4592 3.81588 15.3001 3.93316 15.1828L9.11675 10L3.93316 4.8172C3.81588 4.69992 3.75 4.54086 3.75 4.37501C3.75 4.20916 3.81588 4.0501 3.93316 3.93282C4.05044 3.81555 4.2095 3.74966 4.37535 3.74966C4.5412 3.74966 4.70026 3.81555 4.81753 3.93282L10.0003 9.11642L15.1832 3.93282C15.3004 3.81555 15.4595 3.74966 15.6253 3.74966C15.7912 3.74966 15.9503 3.81555 16.0675 3.93282C16.1848 4.0501 16.2507 4.20916 16.2507 4.37501C16.2507 4.54086 16.1848 4.69992 16.0675 4.8172L10.8839 10L16.0675 15.1828Z"
        fill={fillColor}
      />
    </svg>
  );
}
