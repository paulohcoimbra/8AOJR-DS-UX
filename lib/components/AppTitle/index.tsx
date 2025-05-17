import React, { ReactNode } from "react";
import { DSTypography_h1, DSTypography_h3 } from "../../../lib/utils/typography";
import { Container } from "./styled";

export interface AppTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle: string
}

export function AppTitle({icon, title, subtitle} : AppTitleProps) {
  return <Container>
    {icon &&
      icon
    }
    <DSTypography_h1>{title}</DSTypography_h1>
    <DSTypography_h3>{subtitle}</DSTypography_h3>
  </Container>
}