export const twitch = ({
  children,
  color,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: color ?? "currentColor",
      }}
      d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
    />
    {children}
  </svg>
);

export default { twitch };
