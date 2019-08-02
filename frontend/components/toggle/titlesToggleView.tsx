type Props = {
  sendTitles(arg1: string[]): void;
  titles: string[];
  sendTitleToggle(arg1: string[]): void;
};
const TitlesToggleView: React.FunctionComponent<Props> = ({
  titles,
  sendTitles,
  sendTitleToggle
}) => (
  <>
    {titles.map((title, index) => {
      return (
        <div key={title}>
          {title}
          {title != "all" && (
            <button
              onClick={() => {
                if (title === "all") return;
                const storage = Array.from(titles);
                storage.splice(index, index + 1);
                sendTitleToggle(storage);
                sendTitles(storage);
              }}
            >
              x
            </button>
          )}
        </div>
      );
    })}
  </>
);

export default TitlesToggleView;
