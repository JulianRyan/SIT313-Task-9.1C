import 'semantic-ui-css/semantic.min.css'

function Question(props) {
    return (
        <div class="Question">
            <form>
                <div class="form-group row mt-3 mb-3">
                    <label for="questionTitle" class="col-sm-1 col-form-label">Title: </label>
                    <div class="col-sm-11">
                        <input type="input" class="form-control " id="questionTitle" placeholder="Start your question with how, what, why, etc."></input>
                    </div>
                </div>
                <label for="questionProblem">Describe your problem: </label>
                <textarea class="form-control" id="questionProblem" rows="8"></textarea>
                <div class="form-group row mt-3 mb-3">
                    <label for="questionTags" class="col-sm-1 col-form-label">Tags: </label>
                    <div class="col-sm-11">
                        <input type="input" class="form-control " id="questionTags" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java, C#, Selenium, etc."></input>
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

export default Question;