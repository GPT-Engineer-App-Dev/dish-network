import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Recipe Sharing Website
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <Box textAlign="center">
          <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg">
            Add New Recipe
          </Button>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {recipe.title}
                </Heading>
                <Text fontSize="md">{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;