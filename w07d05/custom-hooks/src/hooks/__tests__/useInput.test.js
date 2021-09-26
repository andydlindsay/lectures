import { renderHook, act } from '@testing-library/react-hooks';
import useInput from '../useInput';

describe('useInput tests', () => {

  test('should start with initial value', () => {
    const initialValue = 'hello world';
    const { result } = renderHook(() => useInput(initialValue));
    expect(result.current.value).toBe(initialValue);
  });

  test('should be updateable with a new value', () => {
    const newValue = 'something new';
    const fakeEvent = { target: { value: newValue } };
    const { result } = renderHook(() => useInput(''));
    act(() => result.current.onChange(fakeEvent));
    expect(result.current.value).toBe(newValue);
  });

});
