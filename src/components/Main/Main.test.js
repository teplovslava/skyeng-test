import Main from "./Main";
import { render, screen } from "@testing-library/react";

describe("Main component", () => {

    test("adds a new data entry to listData after button click", () => {
        render(<Main />);
        let list = screen.getByTestId('list')
        const search = screen.getByRole("input", {
            name: /This search can entry new items/i,
        });

        expect(list.length).toEqual(0);
        userEvent.type(search, '');
        list = screen.getByTestId('list')
        expect(list.length).toEqual(30);
    });

    test('users must render', async () => {
        render(<Main />)
        const search = screen.getByRole("input", {
            name: /This search can entry new items/i,
        });
        userEvent.type(search, 'a');
        expect(await screen.findByText(/Посмотреть/)).toBeInTheDocument()
    })

    test('cross must render', () => {
        render(<Main />)
        const search = screen.getByRole("input", {
            name: /This search can entry new items/i,
        });
        userEvent.type(search, 'a');
        expect(screen.findByTestId('cross')).toBeInTheDocument()
    })

});