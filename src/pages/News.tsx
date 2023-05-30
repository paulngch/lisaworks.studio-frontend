import {
  CheckCircleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

export default function News() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          30 May 2023
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A New Beginning
        </h1>
        <p className="mt-6 text-xl leading-8">
          Today marks the introduction of the revamped website.
        </p>
        <p className="mt-2">
          Am extremely excited to present a newly added ghetto cable
          configurator. I hope it helps to give a rough idea on how the cable
          will look like. It is definitely NOT "render" quality.
        </p>
        <div className="mt-5 max-w-2xl">
          <p className="mt-6 text-xl leading-8">
            On a side note, here are some of the things that I am working on
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Charity Stream.
                </strong>{" "}
                Will be providing some cables for a Twitch Streamer's Charity
                Stream some time at the end of the year.
              </span>
            </li>
            <li className="flex gap-x-3">
              <QuestionMarkCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Own Fundraising.
                </strong>{" "}
                Am currently in contact with multiple Charity Orgs in Singapore
                to work out the details of holding a small fundraising (by sale
                of cables) "event" for them.
              </span>
            </li>
            <li className="flex gap-x-3">
              <QuestionMarkCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Reopening of Commissions.
                </strong>{" "}
                With most of the backlog cleared, commissions should be opening
                soon, do keep a lookout as it would most likely be posted on
                Instagram first.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Disclaimer: I would really love for all these to materialise, but
            sometimes life happens and plans get pushed back a little. But
            nevertheless, I will do my best to keep this going as long as
            possible.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Remembering the reason for starting
          </h2>
          <p className="mt-6">
            It all began with the need to gift something that not only embodies
            my appreciation for some peoples' help. But at the same time I
            didn't want to get something off the shelf. <br /> Fast forward,
            here, it has been a common practice to request for the cost of
            workmanship to be donated to a charity organisation of the clients'
            choice*. And I have plans to re-start the practice every once in
            awhile.
            <br />
          </p>
          <p className="text-sm">*Proof of donation required</p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “We make a living by what we get. We make a life by what we
                give.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">
                  Winston Churchill
                </strong>{" "}
              </div>
            </figcaption>
          </figure>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/triplecable.jpg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Planned to be given out/sold for charitable purposes.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
