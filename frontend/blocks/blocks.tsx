//options: href (queryId or no-queryId)
import { Link } from "./link";
import { H1, H2, H3, H4, H5, H6 } from "./headers";
//options: (href or no-href or submit = extra variable value), (default darken or lighten),     color = string, (full = 100% width)
import { Button, Button1 } from "./buttons";
//options  flexchild: surface, Ssurface, Msurface, Lsurface
import { FlexContainer, FlexChild } from "./grid";
//options: htmlFor,handleChange = function,surface = 0-100, color = string, placeholder
import { Input } from "./form/input";
import { InputFile } from "./form/inputFile";
//options: htmlFor,handleChange = function,surface = 0-100, color = string, placeholder
import { Select } from "./form/select";
import { Textarea } from "./form/textarea";
//options: src,(width in rem), alt
import { Image } from "./image";

export {
  Link,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Button,
  Button1,
  FlexContainer,
  FlexChild,
  InputFile,
  Input,
  Select,
  Textarea,
  Image
};
