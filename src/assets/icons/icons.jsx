export const WarningIcon = ({ width = 16, height = 16, color = "#D08700" }) => (
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

export const ErrorIcon = ({ width = 16, height = 16, color = "#E7000B" }) => (
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

export const SuccessIcon = ({ width = 16, height = 16, color = "#00A63E" }) => (
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

export const InfoCircleIcon = ({
  width = 20,
  height = 20,
  color = "#E7000B",
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

export const ShieldIcon = ({
  width = 24,
  height = 24,
  stroke = 2,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 13.0004C20 18.0004 16.5 20.5004 12.34 21.9504C12.1222 22.0243 11.8855 22.0207 11.67 21.9404C7.5 20.5004 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FileDocumentIcon = ({
  width = 24,
  height = 24,
  stroke = 2,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4.33594V8.33594C14 8.86637 14.2107 9.37508 14.5858 9.75015C14.9609 10.1252 15.4696 10.3359 16 10.3359H20"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9H8"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13H8"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17H8"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeIcon = ({
  width = 24,
  height = 24,
  color = "#000",
  stroke = 2,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12C18.6 16 15.6 18 12 18C8.4 18 5.4 16 3 12C5.4 8 8.4 6 12 6C15.6 6 18.6 8 21 12Z"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WarningTriangleIcon = ({
  width = 16,
  height = 16,
  color = "#D08700",
}) => {
  return (
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
};

export const HexagonWarningIcon = ({
  width = 20,
  height = 20,
  color = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13.3359H10.0083"
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
      d="M12.76 1.66406C13.202 1.66416 13.6259 1.83981 13.9384 2.1524L17.845 6.05906C18.1576 6.37155 18.3333 6.7954 18.3334 7.2374V12.7574C18.3333 13.1994 18.1576 13.6232 17.845 13.9357L13.9384 17.8424C13.6259 18.155 13.202 18.3306 12.76 18.3307H7.24002C6.79803 18.3306 6.37417 18.155 6.06169 17.8424L2.15502 13.9357C1.84244 13.6232 1.66678 13.1994 1.66669 12.7574V7.2374C1.66678 6.7954 1.84244 6.37155 2.15502 6.05906L6.06169 2.1524C6.37417 1.83981 6.79803 1.66416 7.24002 1.66406H12.76Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChatIcon = ({ width = 20, height = 20, color = "#155DFC" }) => (
  <svg
    width={width}
    height={height}
    color={color}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AutomationIcon = ({ width = 20, height = 20, color = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8V4H8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 14H4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 14H22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 13V15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13V15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DollarIcon = ({ width = 20, height = 20, color = "#0A0A0A" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.66406V18.3307"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 4.16406H7.91667C7.14312 4.16406 6.40125 4.47135 5.85427 5.01833C5.30729 5.56532 5 6.30718 5 7.08073C5 7.85428 5.30729 8.59614 5.85427 9.14312C6.40125 9.69011 7.14312 9.9974 7.91667 9.9974H12.0833C12.8569 9.9974 13.5987 10.3047 14.1457 10.8517C14.6927 11.3986 15 12.1405 15 12.9141C15 13.6876 14.6927 14.4295 14.1457 14.9765C13.5987 15.5234 12.8569 15.8307 12.0833 15.8307H5"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SimulationIcon = ({
  width = 16,
  height = 16,
  color = "#0A0A0A",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_28456)">
      <path
        d="M14.6673 8.0026H13.014C12.7226 8.00198 12.4391 8.09681 12.2067 8.27258C11.9744 8.44836 11.806 8.6954 11.7273 8.97594L10.1607 14.5493C10.1506 14.5839 10.1295 14.6143 10.1007 14.6359C10.0718 14.6576 10.0367 14.6693 10.0007 14.6693C9.96459 14.6693 9.9295 14.6576 9.90065 14.6359C9.8718 14.6143 9.85075 14.5839 9.84065 14.5493L6.16065 1.45594C6.15055 1.42132 6.1295 1.39091 6.10065 1.36927C6.0718 1.34763 6.03671 1.33594 6.00065 1.33594C5.96459 1.33594 5.9295 1.34763 5.90065 1.36927C5.8718 1.39091 5.85075 1.42132 5.84065 1.45594L4.27398 7.02927C4.19563 7.30871 4.02824 7.55495 3.79723 7.73061C3.56622 7.90628 3.2842 8.00177 2.99398 8.0026H1.33398"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_28456">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ElectricIcon = ({
  width = 16,
  height = 16,
  color = "#155DFC",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.66699 9.32986C2.54083 9.33029 2.41714 9.29492 2.31029 9.22785C2.20344 9.16078 2.11781 9.06477 2.06335 8.95097C2.0089 8.83717 1.98785 8.71025 2.00265 8.58497C2.01746 8.45968 2.06751 8.34117 2.14699 8.24319L8.74699 1.44319C8.7965 1.38605 8.86396 1.34743 8.93831 1.33368C9.01266 1.31993 9.08947 1.33187 9.15614 1.36753C9.22281 1.40319 9.27538 1.46046 9.30521 1.52993C9.33504 1.59941 9.34037 1.67696 9.32032 1.74986L8.04032 5.76319C8.00258 5.86421 7.9899 5.97287 8.00338 6.07987C8.01686 6.18686 8.05609 6.28898 8.11771 6.37748C8.17933 6.46598 8.2615 6.5382 8.35717 6.58797C8.45284 6.63773 8.55915 6.66355 8.66699 6.66319H13.3337C13.4598 6.66276 13.5835 6.69814 13.6904 6.76521C13.7972 6.83228 13.8828 6.92829 13.9373 7.04209C13.9917 7.15589 14.0128 7.2828 13.998 7.40809C13.9832 7.53338 13.9331 7.65189 13.8537 7.74986L7.25365 14.5499C7.20415 14.607 7.13668 14.6456 7.06233 14.6594C6.98798 14.6731 6.91117 14.6612 6.8445 14.6255C6.77783 14.5899 6.72526 14.5326 6.69543 14.4631C6.6656 14.3936 6.66027 14.3161 6.68032 14.2432L7.96032 10.2299C7.99806 10.1288 8.01074 10.0202 7.99726 9.91319C7.98378 9.8062 7.94455 9.70407 7.88293 9.61558C7.82131 9.52708 7.73914 9.45485 7.64347 9.40509C7.5478 9.35532 7.44149 9.32951 7.33365 9.32986H2.66699Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const EmployeeIcon = ({ width = 24, height = 24, color = "#fff" }) => (
<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 21.0028V19.0028C21.9993 18.1165 21.7044 17.2556 21.1614 16.5551C20.6184 15.8547 19.8581 15.3544 19 15.1328" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3.13281C16.8604 3.35311 17.623 3.85351 18.1676 4.55512C18.7122 5.25673 19.0078 6.11964 19.0078 7.00781C19.0078 7.89598 18.7122 8.75889 18.1676 9.4605C17.623 10.1621 16.8604 10.6625 16 10.8828" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export const ClockIcon = ({ width = 20, height = 20, color = "#F54900" }) => (
<svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18.3307C14.6024 18.3307 18.3334 14.5998 18.3334 9.9974C18.3334 5.39502 14.6024 1.66406 10 1.66406C5.39765 1.66406 1.66669 5.39502 1.66669 9.9974C1.66669 14.5998 5.39765 18.3307 10 18.3307Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5V10L13.3333 11.6667" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export const FreezeIcon = ({ width = 20, height = 20, color = "#fff" }) => (
<svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18.3307C14.6024 18.3307 18.3334 14.5998 18.3334 9.9974C18.3334 5.39502 14.6024 1.66406 10 1.66406C5.39765 1.66406 1.66669 5.39502 1.66669 9.9974C1.66669 14.5998 5.39765 18.3307 10 18.3307Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.08331 4.08594L15.9166 15.9193" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);



