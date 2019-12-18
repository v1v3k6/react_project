COMMIT_TITLE=$1
COMMIT_BODY=$2
if [ -z "$COMMIT_TITLE" ]; then
    echo "Error! No title is given!"
    COMMIT_TITLE="Auto push script title"
elif [ -z "$COMMIT_BODY" ]; then
    echo "Warn: No body!"
    git add * && git commit -m "$COMMIT_TITLE" && git push origin master
else
    git add * && git commit -m "$COMMIT_TITLE" -m "$COMMIT_BODY" && git push origin master
fi