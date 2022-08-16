import { render, screen } from "@testing-library/react";
import Posts, { getStaticProps } from "../../pages/posts";
import { getPrismicClient } from "../../services/prismic";

jest.mock("../../services/prismic");

const posts = [
  {
    slug: "my-new-post",
    title: "My new post",
    excerpt: "Post excerpt",
    updatedAt: "10 de Abril",
  },
];

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My new post")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getAllByType: jest.fn().mockResolvedValueOnce([
        {
          uid: "my-new-post",
          data: {
            slices: [
              {
                primary: {
                  title: [{ text: "My new post" }],
                  description: [{ type: "paragraph", text: "Post excerpt" }],
                },
              },
            ],
          },
          last_publication_date: "01-01-2022",
        },
      ]),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: "my-new-post",
              title: "My new post",
              excerpt: "Post excerpt",
              updatedAt: "01 de janeiro de 2022",
            },
          ],
        },
      })
    );
  });
});
