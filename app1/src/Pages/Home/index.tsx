import React from "react";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { Button } from "app2/Button";

const Home = () => (
    <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-5xl text-white">Hello World 👋</h1>
        <p className="text-gray-400 mt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
            eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
        </p>
        <React.Suspense fallback="loading">
            <Button className="!bg-blue-600" data-testid="helloFriendsButton">Hello Friends 🚀</Button>
        </React.Suspense>
    </div>
);

export { Home };
