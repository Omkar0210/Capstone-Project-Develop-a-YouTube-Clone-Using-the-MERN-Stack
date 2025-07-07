import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChannel } from '../features/channel/channelSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateChannelForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentChannel, loading, error } = useSelector((state) => state.channel);

  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [channelBanner, setChannelBanner] = useState(null);
  const [selectedBannerName, setSelectedBannerName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("channelName", channelName);
    formData.append("description", description);
    if (channelBanner) {
      formData.append("banner", channelBanner);
    }

    try {
      const createdChannel = await dispatch(createChannel(formData)).unwrap();
      toast.success("Channel created successfully!");
      navigate(`/channel/${createdChannel._id}`);
    } catch (error) {
      toast.error(error.message || "Channel creation failed");
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    setChannelBanner(file);
    setSelectedBannerName(file?.name || '');
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold">Create Your Channel</h2>

      <input
        type="text"
        name="channelName"
        placeholder="Channel Name"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Channel Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {/* Attractive Choose File Button for Banner */}
      <div className="space-y-2">
        <label className="block font-medium">Upload Channel Banner</label>
        <input
          type="file"
          id="bannerUpload"
          accept="image/*"
          onChange={handleBannerChange}
          className="hidden"
        />
        <label
          htmlFor="bannerUpload"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Choose Banner
        </label>
        {selectedBannerName && (
          <p className="text-sm text-gray-600">Selected File: {selectedBannerName}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Creating...' : 'Create Channel'}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default CreateChannelForm;
