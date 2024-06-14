import { VariantProps, cva } from "class-variance-authority";

const styles = cva(
  //////// Your stlyes goes here ///////
  "aspect-square border-white border-b-transparent rounded-full inline-block box-border animate-spin",
  //////// Size Variants ///////
  {
    variants: {
      size: {
        sm: "border-[0.2rem] w-4",
        md: "border-4 w-8",
        lg: "border-8 w-12",
      },
      //////// Color Variants ///////
      color: {
        default: "#fff",
      },
    },
  }
);

//////// Prop Types /////////
type Props = {
  size: VariantProps<typeof styles>["size"];
} & React.HTMLAttributes<HTMLSpanElement>;

export default function LoadingSpinner({ size = "sm", ...props }: Props) {
  return <span {...props} className={styles({ size })}></span>;
}
