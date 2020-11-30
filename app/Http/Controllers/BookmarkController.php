<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Inertia\Inertia;
use shweshi\OpenGraph\OpenGraph;

class BookmarkController extends Controller
{
    public function index()
    {
        $bookmarks = Bookmark::query()
            ->where('user_id', auth()->id())
            ->where('is_active', 1)
            ->get();

        return Inertia::render('Bookmark/List/index', [
            'bookmarks' => $bookmarks
        ]);
    }

    public function add()
    {
        return Inertia::render('Bookmark/Add/index');
    }

    public function getPreviewData(Request $request)
    {
        $postData = $this->validate($request, [
            'link' => ['required']
        ]);

        $openGraph = new OpenGraph();

        $data = $openGraph->fetch($postData['link'], true);

        $bookmark = Bookmark::create([
            'title' => $data['title'],
            'description' => $data['description'] || '',
            'type' => $data['type'] || '',
            'url' => $postData['link'],
            'image_url' => $data['image'] || '',
            'user_id' => auth()->id()
        ]);

        return redirect()->route('bookmarks.view', [
            'bookmark' => $bookmark->id
        ]);
    }

    public function view(Bookmark $bookmark)
    {
        if (auth()->id() !== $bookmark->user_id) {
            abort(401, 'You are not allowed to view this bookmark');
        }

        return Inertia::render('Bookmark/View/index', [
            'bookmark' => $bookmark
        ]);
    }


    public function makeActive(Request $request)
    {
        $postData = $this->validate($request, [
            'id' => ['required', 'exists:bookmarks,id'],
        ]);

        $bookmark = Bookmark::find($postData['id']);

        if (auth()->id() !== $bookmark->user_id) {
            abort(401, 'You are not allowed to make this bookmark active');
        }

        $bookmark->is_active = 1;
        $bookmark->save();

        return redirect()->route('bookmarks.index');
    }
}
