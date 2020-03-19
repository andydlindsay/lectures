import { renderHook, act } from '@testing-library/react-hooks';
import useInput from '../useInput';

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

test('should be resetable back to initial value', () => {
  const initialValue = 'hello world';
  const fakeEvent = { target: { value: 'something new' } };
  const { result } = renderHook(() => useInput(initialValue));
  act(() => result.current.onChange(fakeEvent));
  act(() => result.current.reset());
  expect(result.current.value).toBe(initialValue);
});
