import renderer from "react-test-renderer";

import App from "./App";

it("renders learn react link", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="placers-dropdown-container"
>
  <button
    className="button"
    onClick={[Function]}
  >
    <svg
      fill="#afafb1"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m21.752 6h-2.25v-.75c0-.39782-.1581-.77936-.4394-1.06066s-.6628-.43934-1.0606-.43934h-12.00005c-.39782 0-.77935.15804-1.06066.43934-.2813.2813-.43934.66284-.43934 1.06066v.75h-2.25c-.39782 0-.77935.15804-1.06066.43934-.281302.2813-.439337.66284-.439337 1.06066v1.5c0 .99456.395087 1.9484 1.098347 2.6517.34822.3482.76162.6244 1.21659.8128.45497.1885.94261.2855 1.43506.2855h.34219c.44179 1.4001 1.28416 2.64 2.42297 3.5666 1.13882.9265 2.52417 1.4991 3.98489 1.6468v2.2866h-2.25005c-.19891 0-.38967.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303s.07902.3897.21967.5303c.14066.1407.33142.2197.53033.2197h6.00005c.1989 0 .3896-.079.5303-.2197.1406-.1406.2197-.3314.2197-.5303s-.0791-.3897-.2197-.5303c-.1407-.1407-.3314-.2197-.5303-.2197h-2.25v-2.2894c2.9943-.3028 5.4787-2.4037 6.3825-5.2106h.3675c.9945 0 1.9483-.3951 2.6516-1.0983.7033-.7033 1.0984-1.65714 1.0984-2.6517v-1.5c0-.39782-.1581-.77936-.4394-1.06066s-.6628-.43934-1.0606-.43934zm-17.25005 5.25c-.59673 0-1.16903-.2371-1.59099-.659-.42195-.422-.65901-.99426-.65901-1.591v-1.5h2.25v3c0 .25.01219.5.03657.75zm17.25005-2.25c0 .59674-.2371 1.169-.6591 1.591-.4219.4219-.9942.659-1.5909.659h-.0469c.0308-.2771.0464-.5556.0469-.8344v-2.9156h2.25z"
        fill="#afafb1"
      />
    </svg>
    <span>
      placers
    </span>
  </button>
</div>
`);
});
