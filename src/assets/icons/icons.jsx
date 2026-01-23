export const WarningIcon = ({
  width = 16,
  height = 16,
  color = "#D08700",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4866 12.0015L9.15329 2.66812C9.037 2.46292 8.86836 2.29224 8.66457 2.1735C8.46078 2.05475 8.22915 1.99219 7.99329 1.99219C7.75743 1.99219 7.52579 2.05475 7.322 2.1735C7.11822 2.29224 6.94958 2.46292 6.83329 2.66812L1.49995 12.0015C1.38241 12.205 1.32077 12.4361 1.32129 12.6711C1.32181 12.9062 1.38447 13.137 1.50292 13.34C1.62136 13.5431 1.79138 13.7112 1.99575 13.8273C2.20011 13.9435 2.43156 14.0036 2.66662 14.0015H13.3333C13.5672 14.0012 13.797 13.9394 13.9995 13.8223C14.202 13.7052 14.3701 13.5368 14.487 13.3342C14.6038 13.1315 14.6653 12.9017 14.6653 12.6678C14.6652 12.4338 14.6036 12.204 14.4866 12.0015Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V8.66667"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11.3359H8.00667"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ErrorIcon = ({
  width = 16,
  height = 16,
  color = "#E7000B",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99967 14.6693C11.6816 14.6693 14.6663 11.6845 14.6663 8.0026C14.6663 4.32071 11.6816 1.33594 7.99967 1.33594C4.31778 1.33594 1.33301 4.32071 1.33301 8.0026C1.33301 11.6845 4.31778 14.6693 7.99967 14.6693Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6L6 10"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L10 10"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SuccessIcon = ({
  width = 16,
  height = 16,
  color = "#00A63E",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5341 6.66373C14.8385 8.15793 14.6215 9.71134 13.9193 11.0649C13.2171 12.4185 12.072 13.4904 10.6751 14.1019C9.27816 14.7135 7.71382 14.8276 6.24293 14.4253C4.77205 14.023 3.48353 13.1287 2.59225 11.8913C1.70097 10.654 1.26081 9.14855 1.34518 7.62599C1.42954 6.10342 2.03332 4.65579 3.05583 3.52451C4.07835 2.39323 5.45779 1.64668 6.96411 1.40937C8.47043 1.17205 10.0126 1.4583 11.3334 2.2204"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 7.33073L8 9.33073L14.6667 2.66406"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LocationIcon = ({
  width = 20,
  height = 20,
  color = "#0A0A0A",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 8.33073C16.6667 12.4916 12.0508 16.8249 10.5008 18.1632C10.3564 18.2718 10.1807 18.3305 10 18.3305C9.81933 18.3305 9.64356 18.2718 9.49917 18.1632C7.94917 16.8249 3.33333 12.4916 3.33333 8.33073C3.33333 6.56262 4.03571 4.86693 5.28595 3.61668C6.5362 2.36644 8.23189 1.66406 10 1.66406C11.7681 1.66406 13.4638 2.36644 14.714 3.61668C15.9643 4.86693 16.6667 6.56262 16.6667 8.33073Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.8359C11.3807 10.8359 12.5 9.71665 12.5 8.33594C12.5 6.95523 11.3807 5.83594 10 5.83594C8.61929 5.83594 7.5 6.95523 7.5 8.33594C7.5 9.71665 8.61929 10.8359 10 10.8359Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InfoCircleIcon = ({ width = 20, height = 20, color = "#E7000B" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18.3307C14.6024 18.3307 18.3334 14.5998 18.3334 9.9974C18.3334 5.39502 14.6024 1.66406 10 1.66406C5.39765 1.66406 1.66669 5.39502 1.66669 9.9974C1.66669 14.5998 5.39765 18.3307 10 18.3307Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.66406V9.9974"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.3359H10.0083"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
