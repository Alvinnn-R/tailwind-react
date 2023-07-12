import ApplicationLogo from "./ApplicationLogo";

export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="container">
        <div className="text-center pt-8 -mb-4">
          <ApplicationLogo />
        </div>
        <div className="flex justify-center py-8">
          <div className="max-w-lg w-full text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            alias. Quibusdam earum quod perferendis? Inventore enim dignissimos
            alias laudantium, iure eum odio amet dolor doloremque sapiente
            repudiandae sit dolore possimus.
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4 text-center border-gray-200 border-t">
        <div className="container">&copy; Copyright 2023</div>
      </div>
    </footer>
  );
}
