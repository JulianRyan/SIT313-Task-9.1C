import 'semantic-ui-css/semantic.min.css'

function Article(props) {
    return (
        <div class="Article">
            <form>
                <div class="form-group row mt-3 mb-3">
                    <label for="articleTitle" class="col-sm-1 col-form-label">Title: </label>
                    <div class="col-sm-11">
                        <input type="input" class="form-control " id="articleTitle" placeholder="Please enter a descriptive title"></input>
                    </div>
                </div>

                <label for="articleProblem">Abstract: </label>
                <textarea class="form-control" id="articleProblem" rows="2" placeholder="Please enter a 1-paragraph abstract"></textarea>

                <label for="articleProblem" class="mt-2">Article Text: </label>
                <textarea class="form-control" id="articleProblem" rows="4" placeholder="Please enter your article here"></textarea>

                <div class="form-group row mt-3 mb-3">
                    <label for="articleTags" class="col-sm-1 col-form-label">Tags: </label>
                    <div class="col-sm-11">
                        <input type="input" class="form-control " id="articleTags" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java, C#, Selenium, etc."></input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5"></div>
                    <button type="submit" class="btn btn-primary col-sm-2 mt-1 float-end">Post</button>
                    <div class="col-sm-5"></div>
                </div>
            </form>
        </div>
    );
}

export default Article;