import CreatorProfileCard from "~/components/CreatorProfile/CreatorProfileCard";

function creatorProfile() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto pb-20">
      <div className="max-w-3xl mx-auto">
        <CreatorProfileCard
          bannerUrl="https://i.ytimg.com/vi/tWlsS28uMI8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7_PReYKPfBaYj7U0fBXHdd4sUoA"
          avatarUrl="https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj"
          rank={54}
          creatorName="Scanty Explore"
          description="I've created a channel that help you reach your perfect target market"
          ownerName="Edward Owusu"
          industries={["Hospitality", "Food", "Travel"]}
        />
      </div>
    </div>
  );
}

export default creatorProfile;
