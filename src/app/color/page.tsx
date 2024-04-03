import React from "react";

function page() {
  return (
    <div>
      <div className="size-20 bg-primary">bg-primary</div>
      <div className="size-20 bg-primary-foreground">bg-primary-foreground</div>
      <div className="size-20 bg-primary-contrast">bg-secondary-contrast</div>
      <div className="size-20 bg-secondary">bg-secondary</div>
      <div className="size-20 bg-secondary-foreground">
        bg-secondary-foreground
      </div>
      <div className="size-20 bg-textColor">bg-textColor</div>
      <div className="size-20 bg-textColor-secondary">
        bg-textColor-secondary
      </div>
      <div className="size-20 bg-background">bg-background</div>
      <div className="size-20 bg-background-foreground">
        bg-background-foreground
      </div>
      <div className="size-20 bg-background-contrast">
        bg-background-contrast
      </div>
      <div className="size-20 bg-accent">bg-accent</div>
      <div className="size-20 bg-accent-foreground">bg-accent-foreground</div>
    </div>
  );
}

export default page;
