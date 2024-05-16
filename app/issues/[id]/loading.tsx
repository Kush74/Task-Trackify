import {
  Heading,
  Flex,
  Card,
  Text,
  Skeleton,
  Box,
  Grid,
  Button,
} from "@radix-ui/themes";

const LoadingIsssueDetailsPage = () => {
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="5">
      <Box className="col-span-4">
        <Heading>
          <Skeleton>Lorem ipsum dolor sit amet. </Skeleton>
        </Heading>
        <Flex gap="3" my="2" align="center">
          <Skeleton>
            <Text>Lorem</Text>
          </Skeleton>
          <Skeleton>
            <Text>Lorem, ipsum.</Text>
          </Skeleton>
        </Flex>
        <Card className="prose lg:prose-xl max-w-full" mt="4">
          <Text>
            <Skeleton>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              repudiandae tempore aliquid soluta et animi magni nam unde omnis
              fuga dolorem, suscipit alias repellendus praesentium obcaecati
              dolore in earum enim sed? Ad incidunt magnam aut eum deserunt quas
              exercitationem neque officiis tenetur possimus tempore voluptatum
              facere ipsum doloremque necessitatibus nulla, repudiandae enim
              omnis? Nemo deleniti odit voluptatum sunt soluta consectetur earum
              beatae autem commodi! Quia officia maxime quasi voluptatibus
              tempora blanditiis velit pariatur nam! Facere, laborum tempore!
              Tempora, facere delectus. At animi eum molestiae dolore vitae
              quisquam, praesentium necessitatibus accusamus quidem aspernatur,
              excepturi magnam amet tempora voluptatum voluptatibus sed ratione
              accusantium sunt quam! Quae, quasi magni corporis recusandae
              quaerat alias. Deleniti distinctio accusantium ex ab harum a
              dolore! Alias dolore magni sapiente aliquam adipisci itaque
              corrupti cumque fuga debitis, dignissimos doloremque quis eius
              saepe aspernatur reprehenderit aliquid laborum corporis vel natus
              tenetur! Cupiditate, illum debitis eaque at cumque laboriosam
              quos.
            </Skeleton>
          </Text>
        </Card>
      </Box>
      <Box>
        <Flex direction={"column"} gap={"4"}>
          <Skeleton>
            <Button>Lorem, ipsum.</Button>
          </Skeleton>
          <Skeleton>
            <Button>Lorem, ipsum.</Button>
          </Skeleton>
        </Flex>
      </Box>
    </Grid>
  );
};

export default LoadingIsssueDetailsPage;
