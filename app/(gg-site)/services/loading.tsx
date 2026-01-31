import { Box, Section, Container, Flex, Spinner } from '@radix-ui/themes';

const LoadingPage = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Section size="3" className="bg-[var(--lime-12)]">
                <Container size="3">
                    <Flex direction="column" align="center" className="text-center text-white max-w-3xl mx-auto">
                        <Spinner size="3" />
                    </Flex>
                </Container>
            </Section>

        </Box>
    );
};

export default LoadingPage;
