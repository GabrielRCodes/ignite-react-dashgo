import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
          align="center"
        >
          { showProfileData && (
            <Box
              mr="4"
              textAlign="right"
            >
              <Text>Gabriel Rodrigues</Text>
              <Text
                color="gray.300"
                fontSize="small"
              >
                gabrielrcodes@gmail.com
              </Text>
            </Box>
          )}

          <Avatar
            size="md"
            name="Gabriel Rodrigues"
            src="https://github.com/github.png"
          />

        </Flex>
  );
}