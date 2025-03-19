import { categoryImages } from "@/utils/data";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default async function CategoryList() {
  const data = await fetch("https://dummyjson.com/products/categories");
  const categories = await data.json();

  return (
    <Container sx={{  width: "1100px", my: 8, border: "1px solid #000" }}>
      <Grid container>
        {categories.map((category, index) => {
          return (
            index < 6 && (
              <Grid
                item
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                key={category.slug}
                sx={{py: 4}}
              >
                <Box sx={{borderRight: "1px solid red", textAlign: "center",}}>
                  <Image
                    src={categoryImages[index]}
                    alt="img"
                    width={500}
                    height={500}
                    style={{ width: 50, height: 50, margin: "0 auto" }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {category.name}
                  </Typography>
                </Box>
              </Grid>
            )
          );
        })}
      </Grid>
    </Container>
  );
}
