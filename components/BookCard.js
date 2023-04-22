import { Box, Text, Heading } from 'native-base';

export default function BookCart({ title, description }) {
  return (
    <Box bg="primary.50" p="5" mx="5" mt="5" rounded="lg">
      <Heading size="md" color="secondary.600">
        {title}
      </Heading>
      <Text fontSize="sm">{description}</Text>
    </Box>
  );
}
