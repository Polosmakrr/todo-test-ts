import styled from "styled-components";
import { SPACES, SIZES } from "../../../theme";

export const Title = styled.h2`
  padding-bottom: ${SPACES.l};
  font-size: ${SIZES.l};
`;

export const FieldName = styled.p`
  padding-bottom: ${SPACES.l};
  font-size: ${SIZES.m};
  font-weight: 700;
`;

export const Text = styled.p`
  padding-bottom: ${SPACES.l};
  font-size: ${SIZES.m};
`;

export const StatusText = styled.span`
  padding-right: ${SPACES.m};
  font-size: ${SIZES.m};
`;
